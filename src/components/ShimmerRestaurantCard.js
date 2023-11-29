const ShimmerCardRestaurantCard = () => {
    return (
        <>
            {
                Array(10).fill().map((item) => {
                    return (
                        <div className="flex flex-wrap">
                        <div className="row w-64 h-80  m-4 rounded  shadow-xl animate-pulse">
                            <div className="rounded bg-slate-50  m-2 h-40"></div>
                            <div className="mt-3 rounded">
                                <div className="ml-2 text-sm"></div>
                                <div className="flex justify-around mt-3 animate-pulse bg-neutral-300">
                                    <div className="" >
                                        <span className="font-semibold text-sm"></span>
                                        <span className="p-2 font-semibold text-sm"></span>
                                    </div>
                                    <div></div>
                                    <div className="font-semibold text-sm animate-pulse bg-slate-400"></div>
                                    <div className="font-semibold text-sm"></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </>

    )
}
export default ShimmerCardRestaurantCard