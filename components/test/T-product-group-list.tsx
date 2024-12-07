
import React from 'react';
import { ProductCard, Title } from '../shared'
import { useCategoryStore } from '@/store/category'

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
}

export const TProductGroupList: React.FC<Props> = ({ title, items, categoryId, className }) => {

  const setActiveCategoryId = useCategoryStore((state) => (state.setActiveId))
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

React.useEffect(() => {
  if(intersection?.isIntersecting) {
    setActiveCategoryId(categoryId)
  }
})

  return (
    <div className={className} ref={intersectionRef}>
      <Title text={title}/>
      {
        items.map((product, i) => (
          <ProductCard
            id={product.id}
            key={i}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))
      }
    </div>
  );
};