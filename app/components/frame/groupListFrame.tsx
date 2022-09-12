import { useState } from "react";
import GroupItem from "../../lib/objects/groupItem";
import GroupItemComponent from "../item/groupItemComponent";

export default function GroupListFrame() {
  // const [itemList, setItemList] = useState(new Array<JSX.Element>());
  const [itemList, setItemList] = useState([0, 1, 2]);

  const item = new GroupItem(0, "test", new Date());

  return (
    <div>
      {itemList.map((v) => (
        <GroupItemComponent key={v} item={item} />
      ))}
    </div>
  );
}
