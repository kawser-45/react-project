/* eslint-disable react/prop-types */

import Button from "../components/Button"
import Search from "./Search"


function Header({onAscending, onDescending}) {
  return (
    <div className="flex items-center justify-between pb-20">
          <div className="flex">
            <Button onClick={() => onAscending()} className="px-3 py-1 mr-3 rounded-sm btn-accent bg-cyan-600">Ascending</Button>
            <Button onClick={() => onDescending()} className="px-3 py-1 mr-3 rounded-sm btn-accent bg-cyan-600">Descending</Button>
          </div>

            <Search />

        </div>
  )
}

export default Header