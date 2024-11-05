import { memo } from "react";

function Header(){
        console.log('header rendered')
    return (
        <header>Todo List</header>
    )
}
export default memo(Header)