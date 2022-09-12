import GroupItem from "../../lib/objects/groupItem";

type GroupItemProp = {
  item: GroupItem;
};

export default function GroupItemComponent(props: GroupItemProp) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">id:</div>
        <div className="col-sm">{props.item.id}</div>
        <div className="col-sm">name:</div>
        <div className="col-sm">{props.item.name}</div>
        <div className="col-sm">lockDate:</div>
        <div className="col-sm">{props.item.lockDate.toDateString()}</div>
      </div>
    </div>
  );
}
