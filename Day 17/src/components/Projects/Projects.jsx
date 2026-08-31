export default function Projects({projectsInfo}) {
    
    return (
        <>
        {/* Uncomment this section to spawn 2 cards with the above data automatically (I tried to make it instead of string and ternary operator I used html element) */}
        {/* <div className="card-group">
        {
            projectsInfo.map((project) => {
                return <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{project.projectName}</h4>
                        <p className="card-text">{project.techUsed.join(', ')}</p>
                    </div>
            </div>
            })
        }
        </div> */}

        {/* Here the actual things we used */}
        <h1 className="text-center text-primary">Projects</h1>
        <div className="card-group">
            <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{projectsInfo[0].projectName}</h4>
                        <p className="card-text">{projectsInfo[0].techUsed.join(', ')}</p>
                    </div>
            </div>
            <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{projectsInfo[1].projectName}</h4>
                        <p className="card-text">{projectsInfo[1].techUsed.join(', ')}</p>
                    </div>
            </div>
        </div>

        

        </>
    );
}
