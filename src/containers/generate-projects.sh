########################################################
# generate-projects.sh
# Uses a list of projects and generates a folder for
# each, along with jsx, tests, scss and exports
# necessary for a barebones functional component
########################################################

########################################
# createProject
# Params: folder, project
#
# Initializes a project folder
# with jsx, exports, tests, and css
########################################
createProject () {
  declare folder=$1
  declare project=$2
  
  mkdir ${folder}/${project}

# Initialize the CSS for the project
cat << EOT >> ${folder}/${project}/${project}.scss
.${project} {
  text-align: center;
}
EOT

# Initialize the JSX for the project
cat << EOT >> ${folder}/${project}/${project}.js
import React from "react";
import "./${project}.css";

const ${project} = () => {
  return (
    <div className="${project}">
      <h1>${project}</h1>
    </div>
  );
};

export default ${project};
EOT

# Initialize the exports for the project
cat << EOT >> ${folder}/${project}/index.js
export { default as ${project} } from "./${project}";
EOT

# Initialize the tests for the project
cat << EOT >> ${folder}/${project}/${project}.test.js
import React from "react";
import { shallow } from "enzyme";

import ${project} from "./${project}";

describe("<${project} />", () => {
  it("renders without crashing", () => {
    shallow(<${project} />);
  });
});
EOT
}

# Frontend project list
declare -a Frontend_projects=(
  "TributePage"
  "PersonalPortfolioWebpage"
  "RandomQuoteMachine"
  "LocalWeather"
  "WikipediaViewer"
  "Twitchtv"
  "Calculator"
  "PomodoroClock"
  "TicTacToeGame"
  "SimonGame"
);
mkdir ./Frontend
for project in ${Frontend_projects[@]}
do
  createProject "Frontend" ${project}
done

# Datavis project list
declare -a Datavis_projects=(
  "MarkdownPreviewer"
  "CamperLeaderboard"
  "RecipeBox"
  "GameofLive"
  "RoguelikeGame"
  "BarChart"
  "ScatterplotGraph"
  "HeatMap"
  "ForceDirectedGraph"
  "DataAcrosstheGlobe"
);

mkdir ./Datavis
for project in ${Datavis_projects[@]}
do
  createProject "Datavis" ${project}
done

# Backend project list
declare -a Backend_projects=(
  "TimestampMicroservice"
  "RequestHeaderParser"
  "URLShortener"
  "ImageSearch"
  "FileMetadata"
  "VotingApp"
  "NightlifeCoordination"
  "StockMarket"
  "BookTradingClub"
  "PinterestClone"
);

mkdir ./Backend
for project in ${Backend_projects[@]}
do
  createProject "Backend" ${project}
done