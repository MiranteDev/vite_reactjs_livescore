import { Avatar, AwayTeam, Container, DetailInfo, HomeTeam, Score, Top } from "./styles";



export function GameCard(){

    return (
    
    <Container >
        <Top>
            <HomeTeam>
                <Avatar></Avatar>
                <h3>Benfica</h3>
            </HomeTeam>
            <Score></Score>
            <AwayTeam>
                <Avatar></Avatar>
                <h3>Sporting</h3>
            </AwayTeam>
        </Top>
        <DetailInfo>

        </DetailInfo>
    </Container>);
}