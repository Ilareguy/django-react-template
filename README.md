# django-react-template
Simple Django back-end + React front-end web application template.

This project template is set up to have **React** as the sole frontend framework, which communicates
with the backend's REST framework. The backend is set up to run **Django**.

## PyCharm

For you convenience, I have added PyCharm run configurations in this project. They are not required by any means so you
can safely delete the ``.run/`` directory if you don't plan on using PyCharm.

Do note however that some of these configurations may not be configured properly for your system. You may have to change
some paths for them to work.

The different configurations are:
 - ``Django``: Starts the Django server. Django will hot-reload if you edit its source files. This command won't work 
   until you create your Python virtual environment (scroll down a few paragraphs).
 - ``Install frontend dependencies``: Installs frontend dependencies. You should run this at least once after you have
cloned/downloaded this repository.
 - ``Storybook``: Starts Storybook. Once running, Storybook will automatically hot-reload your React components as you
   edit their source files.
 - ``Build React app (dev)``: Bundles your project's React components into a single file, suitable for development/debugging
purposes. If you plan on using Storybook, you may not need to use this run configuration very much.
 - ``Build React app (production)``: Same as above, but the final output file is suitable for production.

## Usage

The following commands must be run from the system terminal/console. Naturally, the Python executable and npm/yarn must
be in your PATH. This document uses ``yarn``, but ``npm`` will do the trick just fine if you prefer that.

In PyCharm, run these commands from the Terminal tab.

### Create Python Virtual Environment
**Note:** PyCharm can handle this automatically through *Settings > Project:<project-name> > Python Interpreter > [cog icon] > Add...*
````
python -m venv venv 
````

### Install Python Dependencies
````
pip install -r requirements.txt
````

This will install all required Python dependencies to get you started. These dependencies are listed in `requirements.txt`.

----------------------

At this point the back-end framework is installed and ready to be configured.

### Install Front-End Dependencies

````
cd frontend
yarn install
cd ..
````

When you run ``yarn install``, all the required dependencies will be installed automatically for this project. These
dependencies are listed in ``frontend/package.json``.
To add more dependencies later for the front-end side of things, use ``npm`` or ``yarn`` from the ``frontend/`` directory (i.e. `yarn add <dependency>`).

### Creating Django Applications

In Django, each *project* can have multiple *applications* in them. Read more on those [here](https://docs.djangoproject.com/en/3.0/intro/reusable-apps/#:~:text=A%20Django%20application%20is%20a,%2C%20urls%20%2C%20and%20views%20submodules.).
In this repository, the *project* has already been started for you (with `python manage.py startproject django_react`) so there is no need to use this command here.

To create an application:
````
django-admin startapp <application-name>
````

Tell Django how to use your new application with in ``django_react/settings.py``:
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

## React Components

When you are developing your React components (located in ``frontend/src/components/``), to see the changes appear
in your browser, you have two options:
   1. **Run Storybook**. While Storybook is running, your browser will automatically reload your components when you save
   your changes. This is the fastest way to view and test out your components. You can find out more about Storybook 
   [here](https://storybook.js.org/docs/react/get-started/introduction).
   2. **Django**. You can start the Django server and point your browser to its address (typically http://127.0.0.1:8000/).
   When you have made changes to your React components, you must re-build them into a bundled file (which can be achieved 
   with the ``Build React app (dev)`` or ``Build React app (production)`` run configuration or by running ``yarn run dev``
   in your terminal). Once done, you must force-reload your browser to see the changes. Note that sometimes simply
   reloading your tab isn't enough, as it has saved a copy of the old final bundled Javascript file in its cache.
   Force-reloading is the way to go. Obviously this method is a lot more tedious than simply running Storybook.
