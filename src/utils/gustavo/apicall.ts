// try {
//     const response = await fetch('/api/store/fetchbonsai/all');
//     if (!response.ok) {
//       throw new Error('Failed to fetch products');
//     }
//     const data = await response.json();
//     const formattedData = await Promise.all(data.map(async (product: any) => {
//       const imageSrc = await findImage(product.url);
//       return {
//         id: product.id,
//         url: product.url,
//         nome: product.nome,
//         imageSrc,
//         imageAlt: product.nome,
//         preco: `R$${parseFloat(product.preco).toFixed(2)}`,
//         categoria: product.categoria,
//       };
//     }));
//     setProducts(formattedData);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     setError('Erro ao buscar produtos. Tente novamente mais tarde.');
//   } finally {
//     setLoading(false);
//   }