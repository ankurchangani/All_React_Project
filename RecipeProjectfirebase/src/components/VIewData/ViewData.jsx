import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../service/Action/recipeAction';

const ViewRecipe = () => {
    const dispatch = useDispatch();
    const { recipes, loading, error } = useSelector((state) => state.recipeReducer);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching recipes: {error.message}</div>;
    }

    const handleView = () => {

    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }


z
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-4">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">View Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recipes.map((data) => (
                    <div key={data.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">


                        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">{data.title}</h1>
                        <h4 className="text-center text-gray-600">Ingredients: <span className="text-gray-800">{data.ingredients}</span></h4>

                        <h4 className="text-center text-gray-600">Instructions: <span className="text-gray-800">{data.instructions}</span></h4>

                        <h4 className="text-center text-gray-600">Year: <span className="text-gray-800">{data.year}</span></h4>

                        <div className="flex justify-center mt-4 space-x-2">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200 flex items-center"
                                onClick={() => handleView(data.id)}
                            >
                                <span className="mr-1">View</span>
                            </button>

                            <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-200 flex items-center"
                                onClick={() => handleEdit(data.id)}
                            >
                               
                                Edit
                            </button>

                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200 flex items-center"
                                onClick={() => handleDelete(data.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewRecipe;
