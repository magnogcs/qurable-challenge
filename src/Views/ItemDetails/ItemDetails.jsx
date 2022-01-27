import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { itemsAction } from "../../Actions";
import { useSelector } from "react-redux";
import RelatedItems from "../../Components/RelatedItems";
import { Flex, Col6, Container } from "../../Components/ThemeComponents";
import { Card, CardImage, ItemDescription } from "./components";
import Creator from "./components/Creator";
import { Skeleton } from "@mui/material";
import { stringsConstants } from "../../Constants";

const ItemDetails = () => {
  let itemDetails = useSelector((state) => state.itemDetails);
  const param = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(itemsAction.getItemDetails(param.id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setData(itemDetails?.itemDetails?.items[0]);
    document.title =
      itemDetails?.itemDetails?.items[0].name + "- Qurable Items";
    // eslint-disable-next-line
  }, [itemDetails]);

  return (
    <Container>
      <Flex>
        <Col6>
          {data ? (
            <Card>
              <CardImage>
                <img alt={data?.name} src={data?.image}></img>
              </CardImage>
            </Card>
          ) : (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              height="100%"
              sx={{ borderRadius: "8px" }}
            />
          )}
        </Col6>
        <Col6>
          <ItemDescription>
            <h1>
              {data ? (
                data?.name
              ) : (
                <Skeleton sx={{ borderRadius: "8px" }} variant="rectangular" />
              )}
            </h1>
            <p>
              {data ? (
                data?.description
              ) : (
                <Skeleton
                  sx={{ borderRadius: "8px" }}
                  variant="rectangular"
                  height="20vh"
                />
              )}
            </p>
            {data?.creator ? (
              <Creator creator={data?.creator} />
            ) : (
              <Flex style={{ alignItems: "center", marginTop: "5rem" }}>
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton
                  sx={{ borderRadius: "8px", marginLeft: "2rem" }}
                  variant="rectangular"
                  width={100}
                  height={20}
                />
              </Flex>
            )}

            <h4 style={{ marginTop: "6rem" }}>
              <span style={{ marginRight: ".5rem" }}>↓</span>{" "}
              {stringsConstants.DISCOVER_COLLECTION}
            </h4>
          </ItemDescription>
        </Col6>
      </Flex>
      <RelatedItems creator_id={data?.creator.creator_id} />
    </Container>
  );
};

export default ItemDetails;
