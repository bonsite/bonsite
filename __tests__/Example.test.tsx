import {render, screen } from '@testing-library/react'
import Example from '@/app/(Store)/produto/[produtoURL]/page'

it('should have Informações text', () => {

    // Arrange
    render(<Example params={{
        produtoURL: ''
    }} />)

    // Act
    const myElement = screen.getByText('Informações')

    // Assert
    expect(myElement).toBeInTheDocument()
})