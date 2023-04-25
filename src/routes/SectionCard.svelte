<script>
    export let header = "";
    export let content = "";
    export let image = "";
    export let link = "";
    export let altColor = false;
  </script>
  
  <div class={`section-card ${altColor ? 'alt-color' : ''}`}>
    <h3>{header}</h3>
    <p>{content}</p>
    <img src={image} alt={header} />
    <a href={link} target="_blank">Learn more</a>
  </div>
  
  <style>
    .section-card {
      /* Your default styling for the section card */
 
      /* Additional styles */
    }
  
    .section-card.alt-color {
      /* Your alternative color styling for the section card */

      /* Additional styles */
    }
  </style>
  