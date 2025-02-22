function run(){
    var means = [{x:100,y:75},{x:175,y:300},{x:500,y:275}];
    assignCentroids(means);

    // draw data
    clearCanvas();
    graphData('black');
    graphMeans(means, 'gray');

    // display means using text
    var pretty = data.reduce(function(previous,current){
        return previous + '{x:' + current.x + ',y:' + current.y + ',centroid:' + current.centroid +  '},<br>';
    },'');
    document.getElementById('means').innerHTML = pretty;
}

// loop through data points and assign closest centroid
function assignCentroids(means) {

    data.forEach(function(el){
        //loop through cents
        var dist = means.map(function(mean){
            var dx = el.x - mean.x;
            var dy = el.y - mean.y;
            return Math.sqrt( dx * dx + dy * dy);
        });

        //find mean dist
        var minDist = Math.min.apply(null, dist);

        //index position
        el.centroid = dist.indexOf(minDist);
    });

}

// data points for kMeans
var data = [
    {x:150, y:100, centroid:null},
    {x:135, y:65,  centroid:null},
    {x:100, y:50,  centroid:null},
    {x:65,  y:65,  centroid:null},
    {x:50,  y:100, centroid:null},
    {x:65,  y:135, centroid:null},
    {x:100, y:150, centroid:null},
    {x:135, y:135, centroid:null},

    {x:600, y:350, centroid:null},
    {x:571, y:279, centroid:null},
    {x:500, y:250, centroid:null},
    {x:429, y:279, centroid:null},
    {x:400, y:350, centroid:null},
    {x:429, y:421, centroid:null},
    {x:500, y:450, centroid:null},
    {x:571, y:421, centroid:null},

    {x:250, y:350, centroid:null},
    {x:228, y:297, centroid:null},
    {x:175, y:275, centroid:null},
    {x:122, y:297, centroid:null},
    {x:100, y:350, centroid:null},
    {x:122, y:403, centroid:null},
    {x:175, y:425, centroid:null},
    {x:228, y:403, centroid:null}
];

var exercise = {};
exercise.assignCentroids = assignCentroids;