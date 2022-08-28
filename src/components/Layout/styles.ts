import styled from "styled-components";



export const Container = styled.div`
    display: flex ;
    flex-direction: column;

    margin: auto;


    height: 100vh;
`

export const Tab = styled.div`

    display:  flex;
    flex-direction:  row;
    justify-content: space-between;
`
export const Title = styled.div`
    display:  flex;
    flex-direction:  row;
    margin: 20px 20px 20px 40px;

    >h1{

    }

    >h3{
        color: red;
    }
`
export const ProfileInfo = styled.div`
    display:  flex;
    flex-direction: column;

    width: 100px;
    justify-content: center ;
    text-align:  center;
    margin: 20px 20px 20px 40px;


`
export const Avatar = styled.div`
    width:50px;
    height: 50px ;
    background-color:  grey;
    border-radius: 50% ;
    
`
export const Filter = styled.div`

background-color: red;

width: 100%;
height:100px;
`

export const Main = styled.div`

background-color: yellow;

width: 100%;
height: 100vh;

display: flex;

flex-direction: column;
`
