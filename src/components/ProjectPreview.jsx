const ProjectPreview = (props) => {
  return ( 
    <div>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.title}
        </h3>
					<button>
              Learn more
          </button>
    </section>
</div>
  );
}
 
export default ProjectPreview;