import { render, screen, waitFor } from '@testing-library/react';
import Example from '@/app/(Store)/produto/[produtoURL]/page';

// mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      breadcrumbs: [{ id: '1', href: '/home', name: 'Home' }],
      href: '/product',
      nome: 'Produto',
      preco: 100,
      descricao: 'Descrição do produto',
      sol: 'Meia-sombra',
      sol_desc: 'Requer meia-sombra',
      agua: 'Moderada',
      agua_desc: 'Requer rega moderada',
      tamanho: 'Pequeno',
      tamanho_desc: 'Ideal para espaços pequenos',
      poda: 'Anual',
      poda_desc: 'Pode ser podado uma vez ao ano',
      solo: 'Argiloso',
      solo_desc: 'Ideal para solo argiloso',
      delicadeza: 'Alta',
      delicadeza_desc: 'Manuseio delicado',
      cores: ['Verde'],
      tamanhos: ['Pequeno', 'Médio', 'Grande']
    }),
  })
) as jest.Mock;

it('should have Informações text', async () => {

  // Arrange
  render(<Example params={{ produtoURL: '' }} />);


  // Act
  await waitFor(() => {
    const myElement = screen.getByText('Informações');

    //Assert
    expect(myElement).toBeInTheDocument();
  });
});
