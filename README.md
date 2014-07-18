# Discourse Custom Layouts

Is a plugin enabling administrators to change the way a specific topic or post shall be rendered. It can do that based on the archetype or via custom-fields – where custom fields has priority. Only if a template for the archetype is found it will be taken (suffixed with '_topic' and '_post' respectively), the fallback is to always use the default template.

## Configuration

This adds a new configuration setting:

  - custom_layout_per_archetype: whether or not it should try and lookup based on the archetype. This allows also for easy overwriting of the default style by adding a "regular_topic"-template in the path. Default: false.


## Installation

Just two easy steps. From your main discourse do:

    cd plugins
    git clone https://github.com/ligthyear/discourse-plugin-custom-content-layour.git   # clone the repo here
    cd ..
    RAILS_ENV=production rake assets:precompile

Then restart your discourse and enjoy.

## Changelog:

 * 2014-7-18
   - initial structure

## TODO

(in order of importance)

 * add more layouts to be pre-shipped
 * add UI to make layout switching easy as pie

### other Limitations:

 (only the unknown unknowns)

## Authors:
Benjamin Kampmann <me @ create-build-execute . com>

## License (BSD):
Copyright (c) 2014, Benjamin Kampmann
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
