import styled from 'styled-components';

const MainHeader = styled.header`
    background: #fff;
    height: 72px;
    border-bottom: 1px solid #DDD;
    position: sticky;
    top: 0;
    .header-content {
        width: 100%;
        max-width: 980px;
        padding: 0 39px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }    
`;

export default MainHeader;
