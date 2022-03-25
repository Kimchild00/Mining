// // import React, { useState } from "react";  
// // import {
// //   Box,
// //   Center,
// //   FormControl,
// //   Heading,
// //   Input,
// //   Text,
// //   VStack,
// //   Link,
// //   Button,
// //   HStack,
// // } from "native-base";

// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../Config/Firebase";

// // function LoginScreen() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const onHandleLogin = () => {
// //     if (email !== "" && password !== "") {
// //       console.log(email + "  " + auth);
// //       signInWithEmailAndPassword(auth, email, password)
// //         .then(() => console.log("Login success"))
// //         .catch((err) => alert("oke", err.message));
// //     }
// //   };

// //   return (
// //     <Center w="100%">
// //       <Box safeArea p="2" py="8" w="100%" maxW="700">
// //         <Heading
// //           size="lg"
// //           fontWeight="600"
// //           color="coolGray.800"
// //           _dark={{
// //             color: "warmGray.50",
// //           }}
// //         >
// //           Welcome
// //         </Heading>
// //         <Heading
// //           mt="1"
// //           _dark={{
// //             color: "warmGray.200",
// //           }}
// //           color="coolGray.600"
// //           fontWeight="medium"
// //           size="xs"
// //         >
// //           Sign in to continue!
// //         </Heading>

// //         <VStack space={3} mt="5">
// //           <FormControl>
// //             <FormControl.Label>Email ID</FormControl.Label>
// //             <Input onChangeText={(text) => setEmail(text)} />
// //           </FormControl>
// //           <FormControl>
// //             <FormControl.Label>Password</FormControl.Label>
// //             <Input type="password" onChangeText={(text) => setPassword(text)} />
// //             <Link
// //               _text={{
// //                 fontSize: "xs",
// //                 fontWeight: "500",
// //                 color: "indigo.500",
// //               }}
// //               alignSelf="flex-end"
// //               mt="1"
// //             >
// //               Forget Password?
// //             </Link>
// //           </FormControl>
// //           <Button mt="2" colorScheme="indigo" onPress={onHandleLogin}>
// //             Sign in
// //           </Button>
// //           <HStack mt="6" justifyContent="center">
// //             <Text
// //               fontSize="sm"
// //               color="coolGray.600"
// //               _dark={{
// //                 color: "warmGray.200",
// //               }}
// //             >
// //               I'm a new user.{" "}
// //             </Text>
// //           </HStack>
// //         </VStack>
// //       </Box>
// //     </Center>
// //   );
// // }

// // export default LoginScreen;



// import React, { useState } from 'react'
// import { Box, Text,Center,Input,Button} from 'native-base';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import {app} from '../Config/Firebase'

// const auth = getAuth(app);

// function LoginScreen() {
//   const [email,setEmail]=useState();
// const [password,setPassword]=useState();

//   const handleLogin = async ()=>{
//     try{
//         const result = await signInWithEmailAndPassword(auth, email, password);
//         if(result) console.log('SUCCESSp');
//     }
//     catch(error){
//         console.log(error)
//     }
// }

//   return (
//     <Box>
//         <Center>
//     <Text>Login Screen</Text>
//     <Input width={200} placeholder='email' onChangeText={(text)=>setEmail(text)}/>
//     <Input width={200} placeholder='password' type='password' onChangeText={(text)=>setPassword(text)} />
//     <Button m='2' maxW={200} onPress={()=>handleLogin()}>Login</Button>
//     </Center>
//     </Box>
// )
// }

// export default LoginScreen