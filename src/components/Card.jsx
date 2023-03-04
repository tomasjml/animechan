import React from 'react';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const CardAnime = ({imageBg, imageBgAlt, avRating, canonicalTitle, ageRating, subtype, popularityRank}) => {
  return (
    <Card css={{ w: "40vh", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {avRating}
        </Text>
        <Text h1 color="white" transform="uppercase">
          {canonicalTitle}
        </Text>
        <Text h3 color="white" transform="uppercase">
          {subtype}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        // original
        src={imageBg}
        objectFit="cover"
        width="100%"
        height="100%"
        alt={imageBgAlt}
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#d1d1d1" size={12}>
            {ageRating}
          </Text>
        </Col>
        <Col>
          <Text color="#d1d1d1" size={12}>
            {popularityRank}
          </Text>
        </Col>
        <Col>
          <Row justify="flex">
            <Button
              flat
              auto
              css={{ color: "#94f9f0", bg: "#94f9f026"}}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                ADD ->
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  )
}

export default CardAnime;