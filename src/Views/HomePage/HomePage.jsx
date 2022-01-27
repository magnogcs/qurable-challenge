import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../../Components/CardItem";
import { Container, Flex, Col4 } from "../../Components/ThemeComponents";
import { Skeleton } from "@mui/material";
import { itemsAction } from "../../Actions";

const HomePage = () => {
  const dispatch = useDispatch();
  let item = useSelector((state) => state.items);
  const getParams = new URLSearchParams(window.location.search);
  const params = getParams.get("search");

  const [data, setData] = useState("");

  useEffect(() => {
    params
      ? dispatch(itemsAction.getItems(params))
      : dispatch(itemsAction.getItems(""));
    // eslint-disable-next-line
  }, [params]);

  useEffect(() => {
    item?.itemsData && setData(item.itemsData.items);
  }, [item]);

  return (
    <Container>
      <Flex>
        {data
          ? data?.map((item, index) => (
              <Col4>
                <CardItem data={item} />
              </Col4>
            ))
          : Array.from(new Array(12)).map((item, index) => (
              <Col4>
                <Skeleton
                  sx={{ marginTop: "2rem", borderRadius: "8px" }}
                  variant="rectangular"
                  width="100%"
                  height={450}
                />
              </Col4>
            ))}
      </Flex>
    </Container>
  );
};

export default HomePage;
