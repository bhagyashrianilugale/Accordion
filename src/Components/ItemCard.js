import { CDN_URL } from "../utils/constant";
const ItemCard = ({items}) =>{
    
return(
        <div>
               { items?.map((item)=>{
                            return(
                            <div key={ item.card.info.id } 
                             className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between"
                              >
                                <div className="w-9/12">

                                <div className="py-2 font-medium">
                                    <span>{ item.card.info.name }</span>
                                    <span> - &#8377; { item.card.info.price 
                                       ? (item.card.info.price)/100 
                                       : (item.card.info.defaultPrice)/100 }</span>
                                  </div>
                                  <p className="text-xs">{ item.card.info.description }</p>
                                </div>

                                { 
                                item.card.info.imageId 
                                ? <div className="w-3/12 rounded-lg">
                                      <img src={ CDN_URL + item.card.info.imageId } alt="item_card_img"/> 
                                  </div>
                                : <img/> 
                                }
                            </div> 
                            )
                        })
                       
                
                }
            
            
        </div>
   )
};

export default ItemCard;