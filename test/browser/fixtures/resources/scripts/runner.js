function setRunnerFavicon(state) {
    if (state == "waiting") {
        favicon.change([
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAyVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqPCdOAAAAQnRSTlMAAQIDBAUGBwgLDQ8QFBUXGhwiJCczNjs8PkRJTVJVVlxmZ2tvd3h8fn",
            "+ChoiJkpWdnqOor7K109fe6evx8/f5+/0oIIE/AAAAsklEQVQ4y+3Sxw6CUBQE0OGh2BV7wa7Ye6+o8/8f5QICaCIujIkLZ3Vv5iwH+D",
            "yZ863kCU4kAx69IMkIAIh0fbJejrSY3UnFRRhokTMA8YFBK1tNBgApuyMrAMgA1BXdMfRcoXMkyRoAUsnzVSzQewf6f/ApqD6A22asT4",
            "/u/qo6wOgmJQBAYmjX7SBM0OShLJwRhRp70pgXZPMlFZEST0OTfc5NKt6z/gVwod8bhKL4au7cU3hqlWTIZgAAAABJRU5ErkJggg=="]
            .join());
    }
    if (state == "running") {
        favicon.change([
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABSlBMVEUAAAAARN0ARN0ARN0ARN0ARN0ARN",
            "0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN",
            "0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN",
            "0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN",
            "0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN0ARN26QN",
            "SFAAAAbXRSTlMAAQIDBQYHCQoLDxAWFxgaGx0eHyAmJygpKisyMzQ1Njg5Ozw+P0FCQ0ZKS05QUVRVVltcYWJjZGZnaGlscHV4eXt+f4",
            "OFhoiLkpWXmJqdnqCmqq+ytbe5ur7AwcrMzs/R09XZ4ujv8fP3+fv9ayG1jwAAAYRJREFUGBmtwWtTjGEAgOH7fTZFp60NWyGLFCI5lC",
            "JJtpRDzofosBVatff//+rd551mdmfsF+O6+De5+TMwej/Qyo7VrnzNLVp5ZDRNoyRJOFbQmtpNg0n1BlH/+EcXkrDm+7F+ohzwWl0Bcg",
            "RTATpMBVKl2hzsqlskD48Gg6kE2k0FoKR+3bdu/7s6XJzccJrkmZ9unQXCkc0OoKAHv7WHaNxml+CB0T0y66ae9J7sXTT1Ctj1MF/UHT",
            "IV9QJ1I2oFaFsZgZtP20jdeftTLZMpqzur12lgNEBmwIgGRp1kOo1oYDRA5rQRDcbKm+oymWX1x5spmlXUEnUldRs48fw8TC62kXlpai",
            "l/Kr9kah3Y9bBvUCtEl212DaaN7hJVbXaUUNBfVe0hKqobe9btfVYvDk19c5ak7JfbQ9QN1+ZgS92Bmdq5YCqBdlOBuhywqr4AAsFUgA",
            "5TgWMT6gRR39UPLiS5Nd+N5vm7gtbUblqZN5qhlW2rXX01N2kl97gIV2YD/8Mfljab2zdbkIAAAAAASUVORK5CYII="].join());
    }
    if (state == "finished") {
        favicon.change([
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABQVBMVEUAAAAAqgAAqgAAqgAAqgAAqgAAqg",
            "AAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqg",
            "AAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqg",
            "AAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqg",
            "AAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgAAqgD8s8MJAAAAanRSTl",
            "MAAQIDBAUHCAkKDg8QExQWFxogIyQnKCkvNTg7PD9BQ0dNT1FUV1thYmNmZ2lsbW9wcXN0dXd4e3x/gIOFiImMjo+RkpSVmJqbnaOmq6",
            "2ytLe5vMDBw8fIyszV2drg4uTm6Onr8fP19/v9wk95GAAAAUBJREFUGBl1wYVCwlAABdD7AMXCVuxAMVExwcTuRgxQFJXY/f8P8G1vsO",
            "HGObB4gpG7HJm7jfQKOPmjRVYUl+pRTUxprFIKC9j4U3RI1qOi5ZMuss0wNXzRVdYPg3hmDU8CumnWNAWpQWNNmh/AGl2cdaxTtwx4in",
            "RKAJihVBAI0mkXunlKPZijwzYMLZRmcUOd1icmaNqEskHpGhlKpS4AYzTEoKxQl0aBUj90o5TWoGzQkMcPpVYYhskolDiVb7xRuvfAML",
            "gAZYumVxxR9+CF3Q7LDhCi4dELyy4rxtFKJelDWYKWAJChkvJBOaQlDWCEpuc6SOKYNkMAxAdNL3WAOKXNu4DUzbK3Ru8F7TphWGUNiz",
            "Cd09UJysQ+XewJWCY1/lMKoUrzFatcNuG/9niept9YG9yIwEA4EgkPBAQsf38vBwBNaiuTAAAAAElFTkSuQmCC"].join());
    }
    if (state == "timeout") {
        favicon.change([
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAyVBMVEUAAACZmQCZmQCZmQCZmQCZmQCZmQ",
            "CZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQ",
            "CZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQ",
            "CZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQAE8FCgAAAAQnRSTlMAAQIDBgcIERITFCMkJSYnNjg6PD0+P0BBRUlKTVFVWFxdXl9hZm1ze4",
            "KDhYalpqiqq62vsLLKzM7P5ujp7e/5+/3r3EMzAAAA8ElEQVQYGZXBiVqCQBgF0Ovk1ma7maUVrTYtUpYpFHrf/6H6GWBIZejrHPxXpY",
            "JS+1F0ghINigbcXiie4bRFYxMuYxofcDhk6gCFVMDUVKHIJa0LFKhFtKIaVj2Q7EJ0SQ6wokmxC7FH0cSyIUUbokMxxJIWY6cQZ4xtY9",
            "EnY32Ic8bGWNCmcQ1xQ+MIv6iQxi3EHY1AIXfFxD3EgAkPVn3GxJMSPhNRHZlHFtJIbdBhHYlXZnwlfGZ8GDu0NISm1UJsQktDaFoTiA",
            "5zGkIzdwyshcxN+71eP2AuVPBYysM3S33hnaVGqI7mdJq/VfGXH4F1eT+41LVtAAAAAElFTkSuQmCC"].join());
    }
    if (state == "exception") {
        favicon.change([
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAyVBMVEUAAACqAACqAACqAACqAACqAACqAA",
            "CqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAA",
            "CqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAACqAA",
            "CqAACqAACqAACqAACqAACqAACqAACqAAD05LjXAAAAQnRSTlMAAQQFCQoMDhITFBUdHh8gREVHSUxNV1hZW1xdXmJjb3Bxc3R1d3h5e5",
            "ueoKKrra+wsrTO0dPV1+Lk5ujp6+/x9fl+rjUnAAABFklEQVQ4y4WTW0PCMAyFv42LIMwLXhFUVBQQ7wxFHRPz/3+UD+26jhV7ntKctE",
            "1OEsgRdadxmsb3pxEOhP2lGCzPwnW+s5ICVnsFuvIiJTxaj9TexYG4au5/iBNx9sabbMCT4g9lIzoAlV91+GwGI2UNg9a3riUELjRfB0",
            "YiItfAlo7oQ5AqswnAWPHQ0orBrv4uUAmNFU+g3Tv0tDUoKjvU7i4PWcaXNn+TeafkIg7K90VifvKqr8q8pM6AWzvA+4U3SW+ZHqEiI3",
            "UDVDNUxLaRmnNlLurAnWnWl2mWafeisaHdHHkG5p+Re/YM7dwMfs0ZMa9ai/PqGOni9h2sr95+aXl71vIm5eUFaJ9MZkkymxy3LecfTb",
            "GdoF/FS40AAAAASUVORK5CYII="].join());
    }
}

setRunnerFavicon("waiting");

// quick and dirty, from http://stackoverflow.com/a/901144/84283
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function displayTaskName(task) {
    var nameEl = document.getElementById("task-name");
    nameEl.innerText = task;
}

function taskNamespaceToJavascriptNamespace(taskNs) {
    return taskNs.replace(/-/g, "_");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

goog.require("dirac.automation.runner");

var taskRootNamespace = "dirac.tests.tasks";
var task = getParameterByName("task");
if (!task) {
    var msg = "Please specify task parameter in the url. e.g. http://localhost:9080/suite01/resources/runner.html?task=open-close-dirac.";
    console.error(msg);
    document.body.innerHTML = msg;
} else {
    displayTaskName(task);
    var ns = taskRootNamespace + "." + taskNamespaceToJavascriptNamespace(task);
    console.info("loading task namespace '" + ns + "'");
    goog.require(ns);
}
