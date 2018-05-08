########################################################
# generate-projects.sh
# Uses a list of projects and generates a folder for
# each, along with jsx, tests, scss and exports
# necessary for a barebones functional component
# Credit: @P1xt https://github.com/P1xt/speedrun-may2018-react/blob/master/client/utilities/generate-projects.sh
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
cat << EOT >> ${folder}/${project}/${project}.jsx
import React from 'react';
import './${project}.css';

const ${project} = () => {
  return (
    <div className='${project}'>
      <h1>${project}</h1>
    </div>
  );
};

export default ${project};
EOT

# Initialize the exports for the project
cat << EOT >> ${folder}/${project}/index.js
export { default as ${project} } from './${project}';
EOT

# Initialize the tests for the project
cat << EOT >> ${folder}/${project}/${project}.test.js
import React from 'react';
import { shallow } from 'enzyme';

import ${project} from './${project}';

describe('<${project} />', () => {
  it('renders without crashing', () => {
    shallow(<${project} />);
  });
});
EOT
}

# Frontend project list
declare -a Frontend_projects=(
  'TributePage'
  'PersonalPortfolioWebpage'
  'RandomQuoteMachine'
  'LocalWeather'
  'WikipediaViewer'
  'Twitchtv'
  'Calculator'
  'PomodoroClock'
  'TicTacToeGame'
  'SimonGame'
);
mkdir ./Frontend
for project in ${Frontend_projects[@]}
do
  createProject 'Frontend' ${project}
done

# Datavis project list
declare -a Datavis_projects=(
  'MarkdownPreviewer'
  'CamperLeaderboard'
  'RecipeBox'
  'GameofLive'
  'RoguelikeGame'
  'BarChart'
  'ScatterplotGraph'
  'HeatMap'
  'ForceDirectedGraph'
  'DataAcrosstheGlobe'
);

mkdir ./Datavis
for project in ${Datavis_projects[@]}
do
  createProject 'Datavis' ${project}
done

# Backend project list
declare -a Backend_projects=(
  'TimestampMicroservice'
  'RequestHeaderParser'
  'URLShortener'
  'ImageSearch'
  'FileMetadata'
  'VotingApp'
  'NightlifeCoordination'
  'StockMarket'
  'BookTradingClub'
  'PinterestClone'
);

mkdir ./Backend
for project in ${Backend_projects[@]}
do
  createProject 'Backend' ${project}
done

########################################################
# Everything below here is for creating the routing file
########################################################

# Create the Routing file
cat << EOT >> ./ProjectRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
EOT

# Start constructing ProjectRoutes
cat << EOT >> ./ProjectRoutes.js
const ProjectRoutes = () => {
  return (
    <div>
EOT


# Add the routes to the routing file
for project in ${Frontend_projects[@]}
do
  echo '      <Route path=\'/projects/frontend/${project}\' component={${project}} />' >> ./ProjectRoutes.js
done
for project in ${Datavis_projects[@]}
do
  echo '      <Route path=\'/projects/datavis/${project}\' component={${project}} />' >> ./ProjectRoutes.js
done
for project in ${Backend_projects[@]}
do
  echo '      <Route path=\'/projects/backend/${project}\' component={${project}} />' >> ./ProjectRoutes.js
done

# Close out the Routing file
cat << EOT >> ./ProjectRoutes.js
    </div>
  );
}
export default ProjectRoutes;
EOT

#######################################################
# Create dropdowns for navbar
#######################################################
# Create the NavRoutes file
cat << EOT >> ./NavRoutes.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
const NavRoutes = () => {
  return (
    <Nav className='ml-auto' navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Frontend
        </DropdownToggle>
        <DropdownMenu right>
EOT
for project in ${Frontend_projects[@]}
do
NAME=`echo ${project} | sed -e 's/\([A-Z]\)/ \1/g' -e 's/^ //'`
cat << EOT >> ./NavRoutes.js
          <DropdownItem>
            <Link to='/projects/frontend/${project}'>${NAME}</Link>
          </DropdownItem>
EOT
done
cat << EOT >> ./NavRoutes.js
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Data Visualization
        </DropdownToggle>
        <DropdownMenu right>
EOT
for project in ${Datavis_projects[@]}
do
NAME=`echo ${project} | sed -e 's/\([A-Z]\)/ \1/g' -e 's/^ //'`

cat << EOT >> ./NavRoutes.js
          <DropdownItem>
            <Link to='/projects/datavis/${project}'>${NAME}</Link>
          </DropdownItem>
EOT
done
cat << EOT >> ./NavRoutes.js
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Backend
        </DropdownToggle>
        <DropdownMenu right>
EOT
for project in ${Backend_projects[@]}
do
NAME=`echo ${project} | sed -e "s/\([A-Z]\)/ \1/g" -e "s/^ //"`
cat << EOT >> ./NavRoutes.js
          <DropdownItem>
            <Link to='/projects/backend/${project}'>${NAME}</Link>
          </DropdownItem>
EOT
done
cat << EOT >> ./NavRoutes.js
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
}
export default NavRoutes;
EOT