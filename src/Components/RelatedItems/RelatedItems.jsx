import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../../Components/CardItem";
import { itemsAction } from "../../Actions";
import { Container, Flex, Col4 } from "../ThemeComponents";
import { Skeleton } from "@mui/material";

const RelatedItems = ({ creator_id }) => {
  let item = useSelector((state) => state.itemCreators);
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    creator_id && dispatch(itemsAction.getItemsByCreator(creator_id));
    // eslint-disable-next-line
  }, [creator_id]);

  useEffect(() => {
    setData(item?.itemCreators?.items);
  }, [item]);

  return (
    <Container style={{ paddingTop: "7rem" }}>
      <Flex>
        {data
          ? data.map((item, index) => (
              <Col4>
                <CardItem data={item} />
              </Col4>
            ))
          : Array.from(new Array(12)).map((item, index) => (
              <Col4>
                <Skeleton
                  sx={{ marginTop: "1.5rem", borderRadius: "8px" }}
                  variant="rectangular"
                  width="100%"
                  height={300}
                />{" "}
              </Col4>
            ))}
      </Flex>
    </Container>
  );
};

export default RelatedItems;
