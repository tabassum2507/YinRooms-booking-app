import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1563613930909-50da605fbc08?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"  className="featuredImg" alt="" />
            <div className="featuredTitles">
                <h1>Hong Kong</h1>
                <h1>276 Properties</h1>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1563691290431-ab35cd23e551?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580" className="featuredImg" alt="" />
            <div className="featuredTitles">
                <h1>Singapore</h1>
                <h1>712 Properties</h1>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1506344630830-d393262e723c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"  className="featuredImg" alt="" />
            <div className="featuredTitles">
                <h1>Chicago</h1>
                <h1>377 Properties</h1>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1526893381913-e311045b8064?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580"  className="featuredImg" alt="" />
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h1>239 Properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured