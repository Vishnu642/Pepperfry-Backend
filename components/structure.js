function struc(){
    return `<span class="sidebar-heading">Sort</span class="sidebar-heading">
    <div id="sidebar">
        <div id="sort">
            <div id="inp-sort">
                <input type="radio" name="sort" value="relevance" />
                <input type="radio" name="sort" value="ship" />
                <input type="radio" name="sort" value="new" />
            </div>
            <div id="lbl-sort">
                                          
                <span>Relevance</span>
                <span>Highest Priced First</span>
                <span>Lowest Priced First</span>
                <span>Fastest Shipping</span>
                <span>Newest</span>
            </div>
        </div>
    </div>
    <span class="sidebar-heading">Sort by</span>
    <select  name="sort" id="highLow">
            <option value="" disabled selected>---</option>
            <option value="high">High</option>
            <option value="low">Low</option>
    </select>
    <span class="sidebar-heading">Price</span>
    <div id="sort">
        <div id="price-inp">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
        </div>
        <div id="price-lbl">
            <span>Under ₹ 7,000</span>
            <span>₹ 7,000 to ₹ 10,000</span>
            <span>₹ 10,000 to ₹ 20,000</span>
            <span>₹ 20,000 to ₹ 40,000</span>
            <span>Over ₹ 40,000</span>
        </div>
    </div>
`
}
export default struc;