import { LightningElement } from "lwc";

const featuredProducts = null;
const tabs = [
  { id: 1, name: 'All', categorySlug: undefined },
  { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
  { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
  { id: 4, name: 'Plumbing', categorySlug: 'plumbing' }
];

export default class App extends LightningElement {
  title = "Featured Products";
  isLoading = (featuredProducts === null);
  featuredProducts = featuredProducts;

  blockProductsClasses = `block block-products-carousel ${(!this.isLoading) ? 
  "block-products-carousel--loading" : (featuredProducts?.length > 0) ? "block-products-carousel--has-items": "" }`;
  
  groups = tabs;

  get isGroups() {
    return (this.groups.length > 0) ? true : false;
  }

  handleCategoryClick (e) {
    this.template.querySelectorAll(".block-header__group").forEach((item, index) => {
      item.className = "block-header__group";
    })
    e.target.classList.add("block-header__group--active");
  }

}
