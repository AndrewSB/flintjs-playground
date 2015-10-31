view Main {
  <Header />
  <Home route="/" />
  <About route="/about" />
  <Product route="/products/:id" />
}

view Header {
  $ = {
    height: 88,
    background: 'red',
  }
}

view Home {
  let toProduct = id => Flint.router.go('/products/' + id)

  <h2>Come on by</h2>
  <links>
    <a onClick={() => toProduct(15)}>buy shoes</a>
    <a onClick={() => toProduct(30)}>or cakes</a>
    <a onClick={() => toProduct(12)}>or hammers</a>
  </links>
}

view About {
  <h2>Andrew made this</h2>
}

view Product {
  <h2>Product {view.props.params.id}</h2>
  <a onClick={() => Flint.router.go('/')}>home</a>
}