import { useEffect, useState } from "react";
import Category from "./Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="px-5 md:px-[10%] my-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Job Category List</h1>
                <p className="text-sm md:text-base my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    categories.map(category=> 
                        <Category
                            key={category.id}
                            category={category}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default CategoryList;