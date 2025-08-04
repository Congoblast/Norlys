// import styled from "styled-components";
// import Accordion from "../accordion/Accordion";
// import AccordionHeader from "../accordion/accordionHeader/AccordionHeader";
// import AccordionContent from "../accordion/accordionContent/AccordionContent";

// interface Props<T> {
//   items: T[];
//   columns: Array<{ key: keyof T; label: string }>;
// }

// function ContentRow<T>({ items, columns }: Props<T>) {
//   return (
//     <>
//       {items.map((item, index) => (
//         <Accordion key={index} isDefaultExpanded={false}>
//           <AccordionHeader>
//             <HeaderRow>
//               {columns.map((column, index) => (
//                 <Cell key={index}>{String(item[column.key])}</Cell>
//               ))}
//             </HeaderRow>
//           </AccordionHeader>
//           <AccordionContent>
//             <div>Empty!</div>
//           </AccordionContent>
//         </Accordion>
//       ))}
//     </>
//   );
// }
// const HeaderRow = styled.div`
//   display: flex;
//   width: 100%;
//   align-items: center;
// `;

// const Cell = styled.div`
//   flex: 1;
//   padding: 12px;
//   text-align: left;
// `;

// export default ContentRow;
