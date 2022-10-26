# Planting Optimizaton Model
## iBOFFIN Schema



TBD: UPDATE

This repo is about building counrty schema model

### Requirements
Run this command to install all dependences required for this package is isntall automatically 
```sh
pip install -r requirment.txt
```

### Repository structure

├── .github
│   └── workflows
│       └── main.yml
├── .gitignore
├── .idea
│   ├── .gitignore
│   ├── inspectionProfiles
│   │   ├── profiles_settings.xml
│   │   └── Project_Default.xml
│   ├── misc.xml
│   ├── modules.xml
│   ├── schema_planting_optimization_model-main.iml
│   └── workspace.xml
├── dist
│   ├── schema_planting_optimization_model-0.0.1-py3-none-any.whl
│   └── schema_planting_optimization_model-0.0.1.tar.gz
├── docs
│   ├── .buildinfo
│   ├── .doctrees
│   │   ├── environment.pickle
│   │   ├── index.doctree
│   │   ├── schema.doctree
│   │   └── _intro.doctree
│   ├── .nojekyll
│   ├── genindex.html
│   ├── index.html
│   ├── objects.inv
│   ├── py-modindex.html
│   ├── schema.html
│   ├── search.html
│   ├── searchindex.js
│   ├── _images
│   │   ├── classes_schema.Argentina.png
│   │   ├── classes_schema.France.png
│   │   ├── classes_schema.png
│   │   └── classes_schema.Romania.png
│   ├── _intro.html
│   ├── _sources
│   │   ├── index.rst.txt
│   │   ├── schema.rst.txt
│   │   └── _intro.rst.txt
│   └── _static
│       ├── basic.css
│       ├── css
│       │   ├── badge_only.css
│       │   ├── fonts
│       │   │   ├── fontawesome-webfont.eot
│       │   │   ├── fontawesome-webfont.svg
│       │   │   ├── fontawesome-webfont.ttf
│       │   │   ├── fontawesome-webfont.woff
│       │   │   ├── fontawesome-webfont.woff2
│       │   │   ├── lato-bold-italic.woff
│       │   │   ├── lato-bold-italic.woff2
│       │   │   ├── lato-bold.woff
│       │   │   ├── lato-bold.woff2
│       │   │   ├── lato-normal-italic.woff
│       │   │   ├── lato-normal-italic.woff2
│       │   │   ├── lato-normal.woff
│       │   │   ├── lato-normal.woff2
│       │   │   ├── Roboto-Slab-Bold.woff
│       │   │   ├── Roboto-Slab-Bold.woff2
│       │   │   ├── Roboto-Slab-Regular.woff
│       │   │   └── Roboto-Slab-Regular.woff2
│       │   └── theme.css
│       ├── doctools.js
│       ├── documentation_options.js
│       ├── file.png
│       ├── graphviz.css
│       ├── jquery-3.5.1.js
│       ├── jquery-3.6.0.js
│       ├── jquery.js
│       ├── js
│       │   ├── badge_only.js
│       │   ├── html5shiv-printshiv.min.js
│       │   ├── html5shiv.min.js
│       │   └── theme.js
│       ├── language_data.js
│       ├── minus.png
│       ├── plus.png
│       ├── pygments.css
│       ├── searchtools.js
│       ├── sphinx_highlight.js
│       ├── underscore-1.13.1.js
│       ├── underscore.js
│       └── _sphinx_javascript_frameworks_compat.js
├── README.md
├── requirements.txt
├── schema
│   ├── Argentina.py
│   ├── docs_src
│   │   ├── conf.py
│   │   ├── index.rst
│   │   ├── requirements.txt
│   │   ├── schema.rst
│   │   ├── uml_images
│   │   │   ├── classes_iboffin.types.AtomicTypes.png
│   │   │   ├── classes_schema.Argentina.png
│   │   │   ├── classes_schema.France.png
│   │   │   ├── classes_schema.png
│   │   │   └── classes_schema.Romania.png
│   │   ├── _intro.rst
│   │   └── _static
│   │       └── .keep
│   ├── France.py
│   ├── Mexico.py
│   ├── Romania.py
│   ├── schema_types
│   │   ├── GenericTypes.py
│   │   ├── ModelTypes.py
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       ├── GenericTypes.cpython-38.pyc
│   │       ├── GenericTypes.cpython-39.pyc
│   │       ├── ModelTypes.cpython-38.pyc
│   │       ├── ModelTypes.cpython-39.pyc
│   │       ├── __init__.cpython-38.pyc
│   │       └── __init__.cpython-39.pyc
│   └── __pycache__
│       ├── Argentina.cpython-38.pyc
│       ├── Argentina.cpython-39.pyc
│       ├── France.cpython-38.pyc
│       ├── France.cpython-39.pyc
│       ├── Romania.cpython-38.pyc
│       └── Romania.cpython-39.pyc
├── schema_planting_optimization_model.egg-info
│   ├── dependency_links.txt
│   ├── PKG-INFO
│   ├── SOURCES.txt
│   └── top_level.txt
└── setup.py

### Updating the schema
To update schema go to directory `schema` at the root folder create `country.py` file. After that create country model class in this file. For example reference, you can use structure of `Argentina.py` Once you created your model. Update the `schema.rst` file at `schema/docs_src/schema.rst` 

when updating 'schema.rst' using the following code snippet and replace with with your country name
```sh
myCountry
_________
.. uml:: schema.myCountry
    :classes:
.. automodule:: schema.myCountry
    :members:
    :undoc-members:
    :inherited-members:
```

Run the following command to update the documentation of webite 
```sh
sphinx-build ./schema/docs_src ./docs
```


### Updating the schema docs
The docs website is generated from the tool `sphinx`. This will be installed in your environment from iboffin.

Before updating the schema docs Firts please make sure that you installed everything mentioned in 

#### Updating the docs website structure
There is a folder `schema/docs_src` which contains the documentation files.
These files are in `*.rst` format, which is similar to MarkDown `*.md`.

While most of the content of the website is autogenerated via sphinx plugins and comments in your schema definitions, the rst files define the structure of the website itself (menu, toc, links etc)
#### Updating the docs website content after schema change
Provided you update your schema, most of the time you will only need to rebuild the docs website using the same structure (wishing to only update the content)
This is done via the command 'sphinx-build ./schema/docs_src ./docs'
If your files contain no errors, this will result in a static html webiste placed in the `./docs` folder.
This folder can then be used as website root (eg via github pages).
This process can be automated via github actions, to refresh your docs website content every time you update the master branch of the repository.

### Making builds

Make sure you update the `setup.py` file wiith the necessary version changes, include any new modules if added after template was created. Usually future builds would need to only increase the version number in this file.

To build the schema package run the command `python -m build`. Build should be successful if your code contains no errors and the `setup.py` file is correctly configured.

After the build has completed, you will find the packaged build in the `./dist` directory.

This build should be distributed using Artifactory. Read the guide here: [INSERT LINK FOR ARTIFACTORY]

iBOFFIN v1.0.0 will contain further utilities to automate this process!

