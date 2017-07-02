docker run -it --rm \
    -p ${PB_CLIENT_LISTEN:-0.0.0.0}:${PB_CLIENT_PORT:-8070}:80  \
    -v ${PWD}/app:/src/app                              \
    -v ${PWD}/gulp-tasks:/src/gulp-tasks                \
    -v ${PWD}/index.html:/src/index.html                \
    -v ${PWD}/app/css/styles.css:/src/lacuna/styles.css \
    -v ${PWD}/app/js/load.js:/src/lacuna/load.js        \
    -v ${PWD}/app/vendor-css:/src/app/vendor-css        \
    -v ${PWD}/app/vendor-js:/src/app/vendor-js          \
    --name=pb-web-client                                \
    --network pbserver_default                          \
    -e DEBUG=express:*                                  \
    perlblue/pb-web /bin/bash
