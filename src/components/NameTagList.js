import NameTag from "./NameTag"

const NameTagList = (props) => {
    const renderNameTag = (name, index) => (
        <NameTag
           name={name}
           key={name}
           removeName={props.removeName}
           index={index}
        />
    )
    const NameTagElements = props.names.map(renderNameTag);
  return (
    <main>{NameTagElements}</main>
  )
}

export default NameTagList