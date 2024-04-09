import { redirect } from 'next/navigation'
function useAction() {

    const handleEdit = (productId) => {
        console.log(`Editing product with ID ${productId}`);
      };
    
      // Function to handle deleting a product
      const handleDelete = (productId) => {
        console.log(`Deleting product with ID ${productId}`);
      };
    
   
      
      return {
        handleEdit,
        handleDelete,
      }
}

export default useAction