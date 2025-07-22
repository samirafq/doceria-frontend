import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { useCart } from '../lib/cart.jsx';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addItem, items, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cartItem = items.find(item => item.product.productId === product.productId);
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity <= 0) {
      updateQuantity(product.productId, 0);
    } else {
      updateQuantity(product.productId, newQuantity);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-t-lg flex items-center justify-center">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          ) : (
            <div className="text-6xl">🧁</div>
          )}
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <Badge variant="secondary" className="ml-2">
              {product.category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">
              Estoque: {product.stockQuantity}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {isInCart ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-semibold min-w-[2rem] text-center">
                {cartItem.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
                disabled={cartItem.quantity >= product.stockQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              No carrinho
            </span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 w-full">
            <div className="flex items-center space-x-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-semibold min-w-[2rem] text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                disabled={quantity >= product.stockQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-1"
              disabled={product.stockQuantity === 0}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

