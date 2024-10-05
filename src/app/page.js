import { Text, Heading } from "./components/text";

export default function Home() {
    return (<>
          <Heading content='Ti Elkonsult AB' type='01' />
          <Heading content='Ti Elkonsult AB' type='02' />
          <Text content='Hej och välkommen till Ti elksonult ab' type='01' />
          <Text content='läs mer här' type='utility'/>
    </>);
}
