When an element touches its parent, its top and bottom margins will merge
with the margins of the parent element

Example: 

<header>
    <h1>Insanely Expensive JPEGs</h1>
    <h3>(Also known as NFTs)</h3>
</header>

margins of <h1> now merge with <header>


Solution: Add padding to the parent element

Aside: This is NOT an issue when we use flexbox and grid...