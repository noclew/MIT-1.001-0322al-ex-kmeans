
function run(){
	var k = document.getElementById('k').value;
	var means = pickRandomMeans(k);

    // draw data
    clearCanvas();
    graphData('black');
    graphMeans(means, 'gray');

    // show means on screen
	var pretty = means.reduce(function(previous,current){
		return previous + '{x:' + current.x + ',y:' + current.y + '},';
	},'');
	document.getElementById('means').innerHTML = 'Means: ' + pretty;
}

// pick random centroids (means)
var pickRandomMeans = function(k) {
    var means = [];
    var x = 0;
    var y = 0;

    for (var i = 0; i < k ; i++)
    {
        x = Math.floor(Math.random() * 640);
        y = Math.floor(Math.random() * 640);
        means.push({x:x, y:y});
    }

    return means;
};

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
exercise.pickRandomMeans = pickRandomMeans;