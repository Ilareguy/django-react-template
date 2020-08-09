# django-react-template
Simple Django back-end + React front-end web application template.

This project template is set up to have **React** as the sole front-end framework, which communicates
to the back-end through ajax calls. The back-end is set up with **Django** (Python).

## Usage
The following commands must be run from the system terminal/console. Naturally, the Python executable must be
in the PATH.

In PyCharm, run these commands from the Terminal tab.

### Create Python Virtual Environment
**Note:** PyCharm can handle this automatically through *Settings > Project:<project-name> > Python Interpreter*
````
python -m venv venv 
````

### Install Python Dependencies
````
pip install django djangorestframework coverage
````

### Create Django Project
````
django-admin startproject <project-name> .
````

----------------------

At this point the back-end framework is installed and ready to be configured.

### Install Front-End Dependencies

``cd`` in ``frontend/`` and run:

````
yarn add webpack webpack-cli --save-dev
yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
yarn add react react-dom --save-dev
yarn add @storybook/react --save-dev
cd ..
````

To add dependencies for the front-end side of things, use ``npm`` or ``yarn`` from the ``frontend/`` directory.

### Creating Django Applications

In Django, each *project* (created with ``django-admin startproject [...]`` command) can have multiple *applications* 
in them. Read more on those [here](https://docs.djangoproject.com/en/3.0/intro/reusable-apps/#:~:text=A%20Django%20application%20is%20a,%2C%20urls%20%2C%20and%20views%20submodules.).

To create an application:
````
django-admin startapp <application-name>
````

Tell Django how to use your new application with in ``<project-name>/settings.py``:
````python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'newapp.apps.NewAppConfigs', # activate the new app
]
````

### Project Structure
````
/<django-project-name>/     <-- Created with startproject
/<django-app-1-name>/       <-- Created with startapp
/<django-app-1-name>/<...>
/<django-app-n-name>/       <-- Created with startapp
/<django-app-n-name>/<...>
/venv/                      <-- Python virtual environment
````

### TODO: Coverage
every time you add some code to your application run coverage with:
``coverage run --source='.' manage.py test``
and generate the report:
``coverage html``
