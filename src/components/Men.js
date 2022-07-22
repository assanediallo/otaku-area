import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Products/Product/Product";
import useStyles from "./Products/styles";

export default function Men({ clickCategory, onAddToCart }) {
    const classes = useStyles();
    console.log(clickCategory);
    if (!clickCategory.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
            
                {clickCategory.map(productClickCategory => (
                    <Grid key={productClickCategory.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={productClickCategory} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}