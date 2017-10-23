const movingImageVideo = function ($) {
    const $body = $('body');
    const defaultVideoFormat = 16 / 9;

    function loadPlayer(videoUrl, targetDom, newMovingImageUrl) {
        if(newMovingImageUrl){
            const playerId = getPlayerId(videoUrl);
            VideoPlayer.Collection.addPlayerById(playerId);
        }
        else{
            const targetDomId = targetDom.attr('id');
            if (videoUrl.indexOf('playertype') < 0) {
                videoUrl = videoUrl + '&playertype=html5';
            }
            videoUrl = videoUrl + '&jsdiv=' + targetDomId; // mi24 ajax embed
            $body.append('<script src="' + videoUrl + '"></script>');
        }
    }

    function getVideoId(videoUrl) {
        if (isNewMovingImageUrl(videoUrl)) {
            return getParameterFromUrl(videoUrl, 'video-id');
        }
        else {
            return videoUrl.match(/videojs_(.*)/)[1].split('?')[0];
        }
    }

    function getPlayerId(videoUrl) {
        if (isNewMovingImageUrl(videoUrl)) {
            return getParameterFromUrl(videoUrl, 'player-id');
        }
        else {
            const videoId = getVideoId(videoUrl);
            return 'mi24player_' + videoId;
        }
    }

    function onClose($overlayNode, playerId, newMovingImagePlayer) {
        $overlayNode.hide();
        getPlayerById(playerId, newMovingImagePlayer).pause();
    }

    function buildPlayerWithOverlay($trigger, rawVideoUrl, playerId, videoId) {
        let overlayDomId = 'o' + playerId;
        let overlayCloseDomId = 'o' + playerId + '-close';
        let $overlayNode = $('<div id="' + overlayDomId + '" class="video-overlay" style="display: none"></div>');

        let $closeNode = $('<button id="' + overlayCloseDomId + '" class="video-overlay__button"></button>');

        const newMovingImagePlayer = isNewMovingImageUrl(rawVideoUrl);

        const $videoNode = createPlayer(playerId, videoId, newMovingImagePlayer);
        $overlayNode.append($videoNode, $closeNode);
        $body.append($overlayNode);

        loadPlayer(rawVideoUrl, $videoNode, newMovingImagePlayer);

        $closeNode.on('click', function (event) {
            event.preventDefault();
            onClose($overlayNode, playerId, newMovingImagePlayer);
        });

        $trigger.on('click', function (event) {
            event.preventDefault();
            onPlay($videoNode, $overlayNode, playerId, newMovingImagePlayer);
        });
    }

    function onPlay($videoNode, $overlayNode, playerId, newMovingImagePlayer) {
        const width = windowWidth();
        const height = windowHeight();
        let paddingLeftRight = 0;
        if ((width / height) > defaultVideoFormat) {
            const targetWidth = height * defaultVideoFormat;
            paddingLeftRight = (width - targetWidth) / 2;
        }
        $videoNode.css('padding', '0 ' + paddingLeftRight + 'px');
        $overlayNode.show();
        getPlayerById(playerId, newMovingImagePlayer).play();
    }

    function buildPlayerInline($trigger, rawVideoUrl, playerId, videoId) {
        const newMovingImagePlayer = isNewMovingImageUrl(rawVideoUrl);
        const $videoNode = createPlayer(playerId, videoId, newMovingImagePlayer);
        $trigger.append($videoNode);
        loadPlayer(rawVideoUrl, $($videoNode), newMovingImagePlayer);
    }

    function createPlayer(playerId, videoId, newMovingImagePlayer) {
        const player = document.createElement('div');
        if(newMovingImagePlayer){
            player.setAttribute('mi24-video-player', '');
            player.setAttribute('config-type', 'vmpro');
            player.setAttribute('player-id', playerId);
            player.setAttribute('video-id', videoId);
            player.setAttribute('api-url', '//d.video-cdn.net/play');
            player.setAttribute('flash-path', '//e.video-cdn.net/v2/');
        }
        else{
            playerId = 'v' + playerId;
        }

        player.setAttribute('id', playerId);
        player.className += 'video-overlay__video';
        return $(player);
    }

    function getPlayerById(playerId, newMovingImagePlayer) {
        let player;
        if (newMovingImagePlayer) {
            player = VideoPlayer.Collection.getPlayerById(playerId);
        } else {
            player = eval(playerId);
        }
        return player;
    }

    function isNewMovingImageUrl(rawVideoUrl) {
        return rawVideoUrl.indexOf('e.video-cdn') > 0;
    }

    $('[data-video-mi24]').each(function () {
        let $this = $(this);
        let rawVideoUrl = $this.data('video-mi24');
        const videoId = getVideoId(rawVideoUrl);
        const playerId = getPlayerId(rawVideoUrl);

        if ($this.data('video-mi24-fullscreen')) {
            buildPlayerWithOverlay($this, rawVideoUrl, playerId, videoId);
        } else {
            buildPlayerInline($this, rawVideoUrl, playerId, videoId);
        }
    });
};
