/*import React from 'react';
import PropTypes from 'prop-types';
function ItemList({ items }) {
return (
<ul>
{items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
);
}
ItemList.propTypes = {
items: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default ItemList;*/
import React from 'react';
import PropTypes from 'prop-types';
function ItemList({ n }) {
return (
<ul>
{n.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
);
}
ItemList.propTypes = {
n: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default ItemList;