import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";

export default function Index() {
  return <div><Header />
    <Avatar size='90' verified='false' url='images/avatar.png'/>
  </div>;
}
