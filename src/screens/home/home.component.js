import React, { useState, useRef } from "react";
import { Box, Grid } from "@material-ui/core";
import Header from "./../../components/header/header.component";
import ListCard from "./../../components/card/card.component";
import Auth from "./../../components/auth/auth.component";
import InfiniteScroll from 'react-infinite-scroll-component';
import ListData from "./../../assets/data/listData";

const Home = () => {

  const [count, setCount] = useState(0)
  const [list, setList] = useState(ListData);
  const [hasMore, setHasMore] = useState(true);
  const fetchCount = 8;
  const refContainer = useRef();

  const fetchData = () => {
    try {
      console.log("Fetching data");
      // INFO : Mock fake api delay
      setTimeout(() => {
        setCount(count+fetchCount);
        setList([...list, ...ListData]);
        if(count >= 100)
          setHasMore(false);
      },1000);
    }
    catch(err) {
      console.log(err);
    }
  }

  const Loader = () => (
    <div style={{textAlign: "center" }}><h4>Loading...</h4></div>
  )

  const EndMessage = () => (
    <p style={{ textAlign: 'center' }}>
      <b>Thats all folks</b>
    </p>
  )

    return (
        <>
        <Header title="Infinite Scroll" />
        <Auth />
        <Box ref={refContainer}>
            <InfiniteScroll
            dataLength={list.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
            scrollThreshold={0.8}
            endMessage={<EndMessage />}
            >
            <Box style={{marginLeft: 16, marginRight: 16}}>
                <Grid container spacing={3}>
                { list && list.map((list, i) => (
                    <Grid item xs={12} sm={3} key={i}>
                    <ListCard name={list.name} desc={list.desc} image={list.image} />
                    </Grid> ))
                }
                </Grid>
            </Box>
            </InfiniteScroll>
        </Box>
      </>
    )
}

export default Home;