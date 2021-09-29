import styled, {keyframes} from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// const rot = keyframes`
//   from {
//     font-size:36px;
//   }

//   to {
//     font-size:38px;
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// export const Rot = styled.div`
//   display: inline-block;
//   animation: ${rot} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;


const stretch = keyframes  ` 
    0% {
        transform: scale(1);
        width:230px;
       
        
      
    }

    50% {
        transform: scale(1.1);
        width:236px;
        
    }

    100% {
        transform: scale(1);
        width:230px;
       
    }
    `

    export const Pulse = styled.h4`
   
   
    width:230px;
    font-size:38px;
   
  
    animation: ${stretch} 1.2s linear infinite;
    `

    // animation-name: ${stretch};
    // animation-duration: 1.5s;
    // animation-timing-function: ease-in;
    // animation-direction: alternate;
    // animation-iteration-count: infinite;
    // animation-play-state: running;