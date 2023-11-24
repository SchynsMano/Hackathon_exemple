import {
    Card,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber,
  } from "@chakra-ui/react";
  import { StyleSheet, Text, View } from "react-native";


const Stats = () => {
  return (
    <Card style={styles.card}>
        <StatGroup>
        <Stat>
            <StatLabel>Level</StatLabel>
            <StatNumber>0.4</StatNumber>
            <StatHelpText>
            <StatArrow type="increase" />
            23.36%
            </StatHelpText>
        </Stat>

        <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
            </StatHelpText>
        </Stat>
        </StatGroup>

    </Card>
  );
};
export default Stats;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginTop: 30,
    }
})
