// @flow
import React from "react";
import { Card, Text, Heading, Flex } from "rebass";

import { Wrapper } from "../commons/Grid";
import SearchForm from "./SearchForm";

const Search = () => {
  return (
    <Card
      backgroundImage="url('/static/background.png')"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bg="white"
      px={3}
      py={[4, 5]}
    >
      <Wrapper>
        <Heading
          color="text"
          fontFamily="Evolventa"
          fontSize={[3, 5, 6]}
          lineHeight={1.4}
          mb={[2, 3]}
          textAlign="center"
        >
          Demandez une autorisation provisoire de travail
        </Heading>
        <Flex justifyContent="center">
          <Text
            color="text"
            fontSize={[2, 3, 4]}
            lineHeight={1.4}
            mb={[3, 4]}
            textAlign="center"
            width={[1, 2 / 3]}
          >
            Etudiants étrangers ou employeurs, faites votre demande d’autorisation provisoire de
            travail en quelques clics avec Work in France
          </Text>
        </Flex>
        <SearchForm />
      </Wrapper>
    </Card>
  );
};

export default Search;
