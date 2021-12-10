// Old hostels view page including a search function which I might keep

// return (
//   <Container>
//     <Row>
//       <Col>
//         <Nav className="flex-sm-column">
//           <Form>
//             <Form.Group className="mb-3" controlId="searchHostel">
//               <Form.Label>Search for a hostel</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter hostel name..."
//                 value={searchParams.get("filter") || ""}
//                 onChange={(event) => {
//                   let filter = event.target.value;
//                   if (filter) {
//                     setSearchParams({ filter });
//                   } else {
//                     setSearchParams({});
//                   }
//                 }}
//               ></Form.Control>
//             </Form.Group>
//           </Form>
//           {hostelList
//             .filter((hostelList) => {
//               let filter = searchParams.get("filter");
//               if (!filter) return true;
//               let result =
//                 hostelList.description.toLowerCase() ||
//                 hostelList.name.toLowerCase();
//               return result.includes(filter.toLowerCase());
//             })
//             .map((hostel) => (
//               <LinkContainer to={`/hostels/${hostel.id}`} key={hostel.id}>
//                 <Nav.Link>{hostel.name}</Nav.Link>
//               </LinkContainer>
//             ))}
//         </Nav>
//       </Col>
//       <Col>
//         <Outlet />
//       </Col>
//     </Row>
//   </Container>
// );

// Hostel review page
// export default function Review() {
//   let navigate = useNavigate();
//   const hostelId = useParams();
//   let id = hostelId.hostelId;

//   console.log(id);
//   const [userInput, setUserInput] = useState([
//     {
//       reviwer: "",
//       review: "",
//     },
//   ]);

//   const addReview = async () => {
//     const res = await fetch("http://localhost:8000/hostels/review/" + id, {
//       method: "POST",
//       headers: {
//         "Content-Type": "aplication/json",
//       },
//       body: {
//         reviwer: "Jamie",
//         review: "test test test please work plz",
//       },
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div>
//       <h1>Review</h1>
//       <Form>
//         <Form.Group className="mb-3" controlId="nameInput">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your name here..."
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="reviewInput">
//           <Form.Label>Review</Form.Label>
//           <Form.Control as="textarea" rows={4}></Form.Control>
//         </Form.Group>
//         <Button
//           variant="primary"
//           onClick={() => {
//             navigate("/hostels");
//             addReview();
//           }}
//         >
//           Submit Review
//         </Button>
//       </Form>
//     </div>
//   );
// }
